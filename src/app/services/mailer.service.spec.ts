import { TestBed } from "@angular/core/testing";
import { Mailer } from "./mailer.service";

describe("Mailer", () => {
  let service: Mailer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mailer);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
