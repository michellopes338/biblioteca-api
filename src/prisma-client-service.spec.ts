import { PrismaClientService } from './prisma-client-service';

describe('PrismaClientService', () => {
  it('should be defined', () => {
    expect(new PrismaClientService()).toBeDefined();
  });
});
