import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import {User} from "../entity/User";

export class CreateAdminUser1555864897821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.username = "admin";
        user.password = "admin";
        user.hashPassword();
        user.role = "ADMIN";
        user.email = "admin@admin.com";
        user.firstName = "AdminName";
        user.lastName = "AdminLastName";
        user.bookingEnabled = true;
        user.age = 50;
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }


    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
