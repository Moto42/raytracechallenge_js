import {Tuple} from '../../code/modules/Tuple';

export function Projectile(position, velocity) {
  this.position = position.isPoint  ? position : new Tuple(0,0,0,1);
  this.velocity = velocity.isVector ? position : new Tuple(1,1,0,0);
}

Projectile.prototype.distance = function () {
  return Math.sqrt( this.x**2 + this.z**2 );
}

export function Environment(gravity, wind) {
  this.gravity = gravity.isVector  ? position : new Tuple(0,-1,0,0);
  this.wind    = wind.isVector     ? position : new Tuple(0,0,0,0);
}

export function tick(environment, projectile) {
  const position = projectile.position.add(projectile.velocity);
  const velocity = projectile.velocity.add(environment.gravity).add(environment.wind);
  return new Projectile(position, velocity);
}
