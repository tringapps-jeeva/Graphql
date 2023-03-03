import {books} from "../database/mockdb"
export const resolvers = {
    Query: {
        books: () => books,
    },
};