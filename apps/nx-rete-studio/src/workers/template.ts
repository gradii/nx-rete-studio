import { createAdapter } from '@nx-rete-studio/core';
import * as Template from '@nx-rete-studio/languages-template';
import { responsable } from 'worker-bridge';

responsable(createAdapter(Template));
