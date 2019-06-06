import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
export declare class DealComponent implements OnInit {
    private _snackBar;
    envCode: "DEV" | "PROD";
    BASE_URL: string;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(): void;
    ngOnInit(): void;
}
