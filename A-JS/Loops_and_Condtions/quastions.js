/* int a=15,b=5,c;
do
{
c= a % b;
a= b;
b= c;
}
while (c > 0);
cout<<a; 
//----------------------------------------
int n=20,i,j,m=n/2;
for(I = 0 ; I < n ; i++)
{
if (i < m )
for(j = 0 ; j < I ; j++)
cout<<"*";
else
{
for(j=m;j>0;j--)
cout<<"*";
m--;
}
cout<<endl;
}

//----------------------------------------
int n=10,i,j;
for(i=1;i<10;i++)
{
for(j=1;j<i;j++)
cout<<"*";
cout<<endl;}
for(i=1;i<10;i++)
{ */
//----------------------------------------

int i,n,a=0,b=1,c;
cout<<" pls enter toaller sequnce : ";
cin>>n;
cout<<b;
for(i=0;i<n;i++)
{
c=b;
b=b+a;
a=c;
cout<<' '<<b;
}
//----------------------------------------
int i,n;
float s=0;
cout<<" pls enter toaller sequnce : ";
cin>>n;
for(i=1;i<=n;i++)
{
s=s+(1/i);
cout<<i<<" "<<s<<" ";}
//----------------------------------------
 contenue break و clrscr() و getch() و\ d و\ n و endl و setw( ) مالفرق-
//----------------------------------------
#include<iostream.h>
#include<conio.h>
main()
{clrscr();
int k=0,i,j,a[5];
for(i=1;i<=5;i++)
{cin>>a[i];}
for(i=1;i<=5;i++)
for(j=1;j<=5;j++)
if(a[i]>a[j]){
k=a[i];
a[i]=a[j];
a[j]=k;}
for(i=1;i<=5;i++)
{
cout<<a[i];}
getch();
}
//----------------------------------------

//----------------------------------------

//----------------------------------------



