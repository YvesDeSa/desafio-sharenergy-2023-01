import { container } from "tsyringe";

import { BCryptHashProvider } from "./HashProviders/implementations/BCryptHashProvider";
import IHashProviders from "./HashProviders/models/IHashProviders";

container.registerSingleton<IHashProviders>(
  'HashProvider',
  BCryptHashProvider,
)