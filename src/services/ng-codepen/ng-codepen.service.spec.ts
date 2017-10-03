import { NgCodepenService } from './ng-codepen.service';

describe('NgCodepenService', () => {
  let url: string;

  it('should return a valid url', () => {
    url = NgCodepenService.getCodepenSrc('https://jscodepen.net/zalun/NmudS', 'result,js,html,css', 'dark');
    expect(url.indexOf('https://jscodepen.net/zalun/NmudS/embedded/result,js,html,css/dark/') > -1).toBeTruthy();
  });
});
