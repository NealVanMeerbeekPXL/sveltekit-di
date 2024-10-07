import { createContainer, asClass, type AwilixContainer } from 'awilix';

import { DMARepository } from "./infrastructure/DMARepository";
import { IDMARepository } from './applogic/IDMARepository';
import { IDatabase } from "./infrastructure/IDatabase";
import { Database } from "./infrastructure/Database";
import { DMAController } from './api/DMAController';
import { IDMAService } from './applogic/IDMAService';
import { DMAService } from './applogic/DMAService';

export class IoCContainerSingleton {
    private static container: AwilixContainer;
  
    private constructor() {
      // Private constructor to prevent external instantiation
    }
  
    public static async getInstance(): Promise<AwilixContainer> {
      if (IoCContainerSingleton.container) return this.container;
  
      // Create and initialize the container here...
      // Add your registrations and initialization logic
  
      this.container = createContainer({
        strict: true
    })
    
    this.container
        .register(IDMARepository.name, asClass(DMARepository))
        .register(IDatabase.name, asClass(Database))
        .register(IDMAService.name, asClass(DMAService))
        .register(DMAController.name, asClass(DMAController));
        
      return this.container;
    }
  };