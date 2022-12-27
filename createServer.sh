which node > /dev/null 2>&1 && node=1 || node=0;

if [ ${node} -eq 0 ]; then
    echo "Tải  node để chạy server";
else
    node Main.js
fi