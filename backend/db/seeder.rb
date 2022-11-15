require 'debug'
require 'sqlite3'

class Seeder
    def self.db
        @db ||= SQLite3::Database.new('./db/todos.sqlite')
    end

    def self.seed!
        drop_tables
        create_tables
        seed_data
    end

    def self.drop_tables
        db.execute('DROP TABLE IF EXISTS todos')
    end

    def self.create_tables
        db.execute('CREATE TABLE todos (
            name TEXT NOT NULL,
            done INTEGER,
            hidden INTEGER
        )')
    end

    def self.seed_data
        todos = [
            {name: 'programming', done: 0, hidden: 0},
            {name: 'philosophise', done: 0, hidden: 0},
            {name: 'buy shoes', done: 0, hidden: 0},
            {name: 'visit grandma', done: 0, hidden: 0},
            {name: 'practise drivig', done: 0, hidden: 0},
            {name: 'work on AF-bravour', done: 0, hidden: 0}
        ]

        todos.each do |todo|
            db.execute('INSERT INTO todos (name, done, hidden) VALUES (?,?,?)', [todo[:name], todo[:done], todo[:hidden]])
        end
    end
end

Seeder.seed!