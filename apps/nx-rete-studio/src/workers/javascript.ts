import { createAdapter } from '@nx-rete-studio/core'
import * as JavaScript from '@nx-rete-studio/languages-javascript'
import { responsable } from 'worker-bridge'

responsable(createAdapter(JavaScript))
