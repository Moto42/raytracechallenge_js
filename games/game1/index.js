/**
 * Game defined on page 80 of The Ray Tracer Challenge
 *
 * Fire projectiles at various angles and speeds and see how far they go before hitting the ground.
 *
 */
import {Projectile, Environment, tick} from './parts';
import {Point, Vector} from '../../code/modules/Tuple';

export function playGame() {
  let projectile = new Projectile(Point(0,1,0), Vector(1,1,0).normalize());
  let environment = new Environment(Vector(0,-0.1,0), Vector(-0.01,0,0));

  while(projectile.position.y > 0){
    projectile = tick(projectile, environment);
  }
  const distance =
  console.log(`Projectile landed ${projectile.distance()} away.`)
}
