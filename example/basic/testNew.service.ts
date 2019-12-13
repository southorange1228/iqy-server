import { SoService, Service, Autowired } from "./../../dist/core";
import { TestService } from "./test.service";

@Service
export class TestNewService extends SoService {
  @Autowired
  private testService: TestService;
  public async query(): Promise<string> {
    return "aaa";
  }
}
