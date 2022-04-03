module.exports = {
  type: BookType,
  description: 'Add a book',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: {type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve: (parent, args) => {
    const book = { id: books.length+1, name: args.name, authorId: args.authorId }
    books.push(book)
    return book
  }
}