import { SoController, Get, Controller, Autowired } from "../../../../dist";
import { TestService } from "../services/index.service";

@Controller()
export class TestController extends SoController {
  @Autowired
  private testService: TestService;

  @Get("/")
  async testServiceFunc() {
    const result = await this.testService.index();
    this.ctx.body = result;
  }

  @Get("/controller")
  async testControllerFunc() {
    this.ctx.body = "Test Controller Success";
  }

  @Get("/config")
  async testConfigFunc() {
    this.ctx.body = JSON.stringify(this.config);
  }
}
