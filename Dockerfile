FROM node:14

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /

# Install dependencies
RUN npm install

# Expose our server port.
EXPOSE 3000
EXPOSE 9229

# Run our app supposing the source is in / directory
CMD yarn nodemon --signal SIGINT --inspect=0.0.0.0:9229 --nolazy /app1.ts
