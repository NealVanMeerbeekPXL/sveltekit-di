// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { DependencyContainer } from "tsyringe";

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            diContainer: DependencyContainer
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
