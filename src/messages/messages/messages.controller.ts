import { Controller, Get, Post, Body, Param, Query ,ValidationPipe} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return `test my messages route`;
  }

  @Post()
  createMessage(@Body() body: any) {
    return { data: body.content, message: 'success' };
  }

  @Get('/:id')
  getMessage(@Param('id') id: string, @Query('name', ValidationPipe) name: any) {
    return `my id is = ${id}, and the name is = ${name}`;
  }
}
