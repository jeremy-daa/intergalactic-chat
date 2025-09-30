import { Controller } from '@nestjs/common';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  LoginRequest,
  LoginResponse,
} from '@intergalactic-chat/grpc-protos';

@Controller()
@AuthServiceControllerMethods()
export class AppController implements AuthServiceController {
  login(request: LoginRequest): LoginResponse {
    // In a real app, you would validate the user against a database
    // and generate a real JWT.
    console.log('Login request received on port 3000:', request);

    if (request.username === 'user' && request.password === 'pass') {
      return { token: 'dummy-jwt-token-for-user' };
    }

    // For simplicity, we'll just return a generic token.
    // In a real app, you'd throw an RpcException for invalid credentials.
    return { token: 'dummy-jwt-token' };
  }
}
