"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var apollo_server_1 = require("apollo-server");
var pubsub = new apollo_server_1.PubSub();
var POST_ADDED = 'POST_ADDED';
var books = [
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
var bookResolvers = {
    Query: {
        books: function () { return books; }
    },
    Mutation: {
        createBook: function (_, payload) {
            var book = __assign({ id: uuid_1.v4() }, payload);
            books.push(book);
            pubsub.publish(POST_ADDED, { bookAdded: book });
            return book;
        },
        deleteBook: function (_, id) {
            books = books.filter(function (_a) {
                var id = _a.id;
                return id === id;
            });
            return 'Book deleted';
        }
    },
    Subscription: {
        bookAdded: {
            subscribe: function () { return pubsub.asyncIterator([POST_ADDED]); }
        }
    }
};
exports.default = bookResolvers;
//# sourceMappingURL=book.js.map