import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
export declare class DealComponent implements OnInit {
    private _snackBar;
    environment: import("../environment").envConfigI;
    constructor(_snackBar: MatSnackBar);
    openSnackBar(): void;
    ngOnInit(): void;
}
