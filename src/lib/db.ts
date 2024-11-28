import clientPromise from "./mongodb"

export const getAllUsers = async () => {
  const client = await clientPromise
  
  return client.db('authService').collection('users')
    .find().toArray()
    .then(docs => {
      return docs
    }, reason => {
      return null
    })
}

export const getUserByEmail = async (email) => {
  const client = await clientPromise
  
  
  return client.db('authService').collection('users').findOne({email})
    .then(doc => {
      return doc
    }, reason => {
      return null
    })
}