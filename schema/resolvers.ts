import { GraphQLDateTime } from 'graphql-iso-date'
import { chats, messages } from '../db'

export default {
  Date: GraphQLDateTime,

  Chat: {
    messages(chat: any) {
      return messages.filter(m => chat.messages.includes(m.id))
    },

    lastMessage(chat: any) {
      const lastMessage = chat.messages[chat.messages.length - 1]

      return messages.find(m => m.id === lastMessage)
    },
  },

  Query: {
    chats() {
      return chats
    },

    chat(chat: any, { chatId }: any) {
      return chats.find(c => c.id === chatId)
    },
  },
}
