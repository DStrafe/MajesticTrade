import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateItemTable1696007214234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'item',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'categoryId',
                    type: 'int',
                    isNullable: false,
                },
            ],
        }));

        await queryRunner.createForeignKey('item', new TableForeignKey({
            columnNames: ['categoryId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'category',
            onDelete: 'SET NULL',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('item', 'FK_item_category');

        await queryRunner.dropTable('item');
    }

}
