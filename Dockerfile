FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /calculator
WORKDIR /calculator
COPY Gemfile /calculator/Gemfile
COPY Gemfile.lock /calculator/Gemfile.lock
RUN bundle install
COPY . /calculator

# Add a script to be executed every time the container starts.
COPY script/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
