/* eslint-disable @typescript-eslint/no-explicit-any */
import { verify, JwtPayload } from 'jsonwebtoken';

import { INVALID_OTP_TOKEN, NO_VALIDATION_CODE } from 'src/codes';
import config from 'src/config';
import { MyError } from 'src/error';

const verifyOtpToken = (request: any) => {
  type Payload = { phone: string; otp: string } & JwtPayload;

  const token = request.headers['x-otp-token'];
  if (!token) {
    throw new MyError(NO_VALIDATION_CODE);
  }
  try {
    const decoded = verify(token, config.otp_secret as string) as Payload;
    return decoded;
  } catch (err) {
    throw new MyError(INVALID_OTP_TOKEN);
  }
};

export default verifyOtpToken;
