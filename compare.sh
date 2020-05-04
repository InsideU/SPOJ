args=("$@")
python3 spoj.py ${args[0]}>> firstuser.txt
python3 spoj.py ${args[1]}>> seconduser.txt
diff -y -W 120 firstuser.txt seconduser.txt
