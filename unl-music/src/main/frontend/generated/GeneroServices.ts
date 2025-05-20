import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type Genero_1 from "./com/unl/music/base/models/Genero.js";
import type Pageable_1 from "./com/vaadin/hilla/mappedtypes/Pageable.js";
import client_1 from "./connect-client.default.js";
async function createGenero_1(nombre: string | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("GeneroServices", "createGenero", { nombre }, init); }
async function list_1(pageable: Pageable_1 | undefined, init?: EndpointRequestInit_1): Promise<Array<Genero_1 | undefined> | undefined> { return client_1.call("GeneroServices", "list", { pageable }, init); }
async function listAll_1(init?: EndpointRequestInit_1): Promise<Array<Genero_1 | undefined> | undefined> { return client_1.call("GeneroServices", "listAll", {}, init); }
async function updateGenero_1(id: number | undefined, nombre: string | undefined, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("GeneroServices", "updateGenero", { id, nombre }, init); }
export { createGenero_1 as createGenero, list_1 as list, listAll_1 as listAll, updateGenero_1 as updateGenero };
