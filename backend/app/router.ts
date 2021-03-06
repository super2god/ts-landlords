import { Application } from 'egg';
import { BackendEvent } from 'landlord-core';

const API_PREFIX = '/api/v1';

export default (app: Application) => {
  const { controller, router, io } = app as any;

  router.get(API_PREFIX.concat('/user'), controller.user.getUser);

  const nsp = io.of('/');
  nsp.route(BackendEvent.joinRoom, io.controller.room.joinRoom);
  nsp.route(BackendEvent.readyUser, io.controller.room.readyUser);
  nsp.route(BackendEvent.callLandlord, io.controller.room.callLandlord);
  nsp.route(BackendEvent.notCallLandlord, io.controller.room.notCallLandlord);
  nsp.route(BackendEvent.lootLandlord, io.controller.room.lootLandlord);
  nsp.route(BackendEvent.notLootLandlord, io.controller.room.notLootLandlord);
  nsp.route(BackendEvent.passBout, io.controller.room.passBout);
  nsp.route(BackendEvent.knockOut, io.controller.room.knockOut);
};
