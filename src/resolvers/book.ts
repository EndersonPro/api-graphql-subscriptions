import { v4 as uuidv4 } from 'uuid';
import { IResolvers, PubSub } from 'apollo-server'
const pubsub = new PubSub();

const POST_ADDED = 'POST_ADDED';

interface IBook {
    id?: string
    title: string
    author: string
}

let books: IBook[] = [
    {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd6bid',
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const bookResolvers: IResolvers = {
    Query: {
        books: () => books
    },
    Mutation: {
        createBook: (_, payload: IBook) => {
            const book = { id: uuidv4(), ...payload };
            books.push(book);
            pubsub.publish(POST_ADDED, { bookAdded: book });
            return book;
        },
        deleteBook: (_, id) => {
            books = books.filter(({ id }) => id === id);
            return 'Book deleted'
        }
    },
    Subscription: {
        bookAdded: {
            subscribe: () => pubsub.asyncIterator([POST_ADDED])
        }
    }
}

export default bookResolvers;