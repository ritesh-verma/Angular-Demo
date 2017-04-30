import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatue = 'offline';

  getServerStatus() {
    return this.serverStatue;
  }
}
