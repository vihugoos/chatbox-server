import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController'
import { ProfileUserController } from './controllers/ProfileUserController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const routers = Router()

routers.post('/authenticate', new AuthenticateUserController().handle)

routers.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

routers.get('/messages/last3', new GetLast3MessagesController().handle)

routers.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { routers }
