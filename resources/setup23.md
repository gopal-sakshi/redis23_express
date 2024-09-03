<!-- to load data -->
navigate into persons folder & run script
bash _load-data.sh

if you are at top level, then package.json & package-logck will get inserted

<!--------------------------------------------------------------------------->

for some reason -- data got inserted only in db0
even though I specified to use db1... anyway

inside redis-insight, filter keys based on this
`Person:*`