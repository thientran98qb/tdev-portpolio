import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || ""
const dataset = process.env.NEXT_PUBLIC_DATA_SET || ""

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'tdev-sanity',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
