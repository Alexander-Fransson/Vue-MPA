require 'debug'

class Backend < Sinatra::Base
    register Sinatra::Cors

    set :allow_origin, "*"
    set :allow_methods, "GET,HEAD,POST,PUT,PATCH,DELETE"
    set :allow_headers, "content-type, if-modified-since"
    set :expose_headers, "location, link"
    
    def db
        return @db if @db
        @db = SQLite3::Database.new('./db/todos.sqlite')
        @db.results_as_hash = true
        @db
    end

    before do
        content_type :json
    end

    #index
    get '/api/v1/todos' do
        result = db.execute('SELECT * FROM todos')
        result.each {|result| result['done'] = result['done'] == 1}
        result.each {|result| result['hidden'] = result['hidden'] == 1}
        status 200
        return result.to_json
    end
end