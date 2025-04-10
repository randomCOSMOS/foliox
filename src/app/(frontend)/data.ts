"use server"
import { getPayload } from "payload"
import config from '@payload-config'

export default async function getData() {
    const payload = await getPayload({config});
    const project = await payload.find({
        collection: "projects",
        depth: 2
    })
    return project;
}
  
