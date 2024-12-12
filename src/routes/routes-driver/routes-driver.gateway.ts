import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class RoutesDriverGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!'
  }
}
