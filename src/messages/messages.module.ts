import { Module } from '@nestjs/common';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { AuthersController } from './authers/authers.controller';
import { AuthersService } from './authers/authers.service';
import { SettingsController } from './settings/settings.controller';
import { SettingsService } from './settings/settings.service';

@Module({
  controllers: [MessagesController, AuthersController, SettingsController],
  providers: [MessagesService, AuthersService, SettingsService],
})
export class MessagesModule {}
