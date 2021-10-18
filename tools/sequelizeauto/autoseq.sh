rm ../../src/database/models/*
rm models/*
rm convertedModels/*
../../node_modules/.bin/sequelize-auto sequelize-auto -d demo -h localhost -p 5432 -u postgres -x \$ilven1eaf -e postgres -s hris --cm p --cp c --sg -l ts
# npx github:gary-x0pa/sequelize-auto2hapi-sequelizejs
node rename.js
cp -R models/* ../../src/database/models/
ls models

# ORIGINAL SCRIPT
# rm ../../database/models/*
# rm models/*
# rm convertedModels/*
# ../../node_modules/.bin/sequelize-auto sequelize-auto -d zhuli -h localhost -p 5432 -u postgres -x \$ilven1eaf -e postgres -s hris --cm p --cp c --sg
# npx github:gary-x0pa/sequelize-auto2hapi-sequelizejs
# node rename.js
# cp -R convertedModels/* ../../database/models/