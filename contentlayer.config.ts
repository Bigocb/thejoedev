//contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files'

const Author = defineNestedType(() => ({
    name: 'Author',
    fields: {
        name: { type: 'string', required: true },
        picture: { type: 'string', required: true },
    },
}));

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    contentType: 'markdown',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
        },
        description: {
            type: 'string',
        },
        publishedAt: {
            type: 'date',
            description: 'The date the post was published',
        },
        status: {
            type: 'enum',
            options: ['published', 'draft'],
            default: 'draft',
            required: false,
        },
        slug: {
            type: 'string',
            description: 'The slug of the post',
            required: false,
        },
        author: {
            type: 'nested',
            of: Author,
            required: false,
        },
        featured: {
            type: 'enum',
            options: ["yes", "no"],
            default: 'no',
            required: false,
        },
        tags: {
            type: 'string',
            required: false,
        },
        coverImage: {
            type: 'string',
            description: 'The cover image of the post',
            required: false,
        },
        date: {
            type: 'date',
            description: 'The date the post was published',
        },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` }
    },
}))

export default makeSource({
    contentDirPath: 'src/content/posts',
    documentTypes: [Post],
})
