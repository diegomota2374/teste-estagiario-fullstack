const {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} = require("typeorm");
const { User } = require("./User");

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  title;

  @Column()
  description;

  @Column({ default: false })
  completed;

  @ManyToOne(() => User, (user) => user.tasks)
  user;
}

module.exports = { Task };
