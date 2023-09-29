import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateInventoryTable1696007214235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'inventory',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'count',
                    type: 'float',
                },
                {
                    name: 'userId',
                    type: 'int',
                },
                {
                    name: 'itemId',
                    type: 'int',
                },
            ],
        }));

        await queryRunner.createForeignKey('inventory', new TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createForeignKey('inventory', new TableForeignKey({
            columnNames: ['itemId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'item',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('inventory', 'FK_inventory_user');
        await queryRunner.dropForeignKey('inventory', 'FK_inventory_item');

        await queryRunner.dropTable('inventory');
    }

}
