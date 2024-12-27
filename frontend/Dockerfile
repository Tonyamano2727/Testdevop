# Sử dụng Node.js phiên bản 16
FROM node:16

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các tệp package.json và package-lock.json vào container
COPY ./my-app/package*.json ./

# Cài đặt các dependency
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY ./my-app .

# Mở cổng 3000 để ứng dụng hoạt động
EXPOSE 3000

# Lệnh khởi động ứng dụng
CMD ["npm", "start"]
