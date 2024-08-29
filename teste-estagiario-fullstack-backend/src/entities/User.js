const {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} = require("typeorm");
const { Task } = require("./Task");

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column()
  email;

  @Column()
  password;

  @OneToMany(() => Task, (task) => task.user)
  tasks;
}

module.exports = { User };
