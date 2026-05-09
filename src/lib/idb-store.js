import { openDB as idbOpen, deleteDB as idbDelete } from 'idb'

const DB_NAME = 'AetherProgress'
const DB_VERSION = 1
let dbPromise = null

function getDB() {
  if (!dbPromise) {
    dbPromise = idbOpen(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('fsrs-cards')) {
          const store = db.createObjectStore('fsrs-cards', { keyPath: 'id' })
          store.createIndex('topicId', 'topicId')
          store.createIndex('due', 'due')
        }
        if (!db.objectStoreNames.contains('meta')) {
          db.createObjectStore('meta', { keyPath: 'key' })
        }
      }
    })
  }
  return dbPromise
}

export async function getCardsByTopic(topicId) {
  const db = await getDB()
  return db.getAllFromIndex('fsrs-cards', 'topicId', topicId)
}

export async function saveCard(card) {
  const db = await getDB()
  return db.put('fsrs-cards', card)
}

export async function saveCards(cards) {
  const db = await getDB()
  const tx = db.transaction('fsrs-cards', 'readwrite')
  await Promise.all(cards.map(c => tx.store.put(c)))
  await tx.done
}

export async function getMeta(key) {
  const db = await getDB()
  return db.get('meta', key)
}

export async function saveMeta(record) {
  const db = await getDB()
  return db.put('meta', record)
}

export async function exportTopic(topicSlug) {
  const db = await getDB()
  return db.getAllFromIndex('fsrs-cards', 'topicId', topicSlug)
}

export async function importTopic(topicSlug, cards) {
  const db = await getDB()
  const tx = db.transaction('fsrs-cards', 'readwrite')
  await Promise.all(cards.map(c => tx.store.put({ ...c, topicId: topicSlug })))
  await tx.done
}

export async function getAllCards() {
  const db = await getDB()
  return db.getAll('fsrs-cards')
}

export async function getAllMeta() {
  const db = await getDB()
  return db.getAll('meta')
}

export async function deleteDatabase() {
  if (dbPromise) {
    const db = await dbPromise
    db.close()
    dbPromise = null
  }
  await idbDelete(DB_NAME)
}
