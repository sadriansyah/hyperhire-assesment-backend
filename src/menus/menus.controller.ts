import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('api/menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Get()
  getMenus(@Query('menuId') menuId: string) {
    return this.menusService.getAllMenus(menuId);
  }

  @Get('selection')
  getSelectionMenus() {
    return this.menusService.getSelectionMenus();
  }

  @Get(':id')
  getMenu(@Param('id') id: string) {
    return this.menusService.getMenuById(id);
  }

  @Post()
  createMenu(@Body() data: CreateMenuDto) {
    return this.menusService.createMenu(data);
  }

  @Put(':id')
  updateMenu(@Param('id') id: string, @Body() data: CreateMenuDto) {
    return this.menusService.updateMenu(id, data);
  }

  @Delete(':id')
  deleteMenu(@Param('id') id: string) {
    return this.menusService.deleteMenu(id);
  }
}
