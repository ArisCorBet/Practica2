import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type Album_1 from "./com/unl/music/base/models/Album.js";
import client_1 from "./connect-client.default.js";
async function createAlbum_1(nombre: string | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("AlbumServices", "createAlbum", { nombre }, init); }
async function listAll_1(init?: EndpointRequestInit_1): Promise<Array<Album_1 | undefined> | undefined> { return client_1.call("AlbumServices", "listAll", {}, init); }
async function listAllBanda_1(init?: EndpointRequestInit_1): Promise<Array<Album_1 | undefined> | undefined> { return client_1.call("AlbumServices", "listAllBanda", {}, init); }
async function updateBanda_1(id: number | undefined, nombre: string | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("AlbumServices", "updateBanda", { id, nombre }, init); }
export { createAlbum_1 as createAlbum, listAll_1 as listAll, listAllBanda_1 as listAllBanda, updateBanda_1 as updateBanda };
