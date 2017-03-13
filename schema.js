import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt
} from 'graphql/type'

let count = 1

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                description: "The count!",
                resolve: () => count
            }
        }
    })
})

export default schema