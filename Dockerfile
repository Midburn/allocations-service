FROM node:10.15.0
RUN apt-get update && apt-get install -y build-essential

RUN adduser --system allocations
COPY package.json package-lock.json /home/allocations/
RUN chown -R communities /home/allocations/
USER allocations
RUN cd /home/allocations && npm install --ignore-scripts --pure-lockfile
RUN cd /home/allocations && npm rebuild node-sass --force

USER root
COPY . /home/allocations
WORKDIR /home/allocations

ENV PATH="/home/allocations/node_modules/.bin:${PATH}"
RUN npm run build

ENTRYPOINT ["/home/allocations/entrypoint.sh"]