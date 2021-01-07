// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

export class Step {
    value: string;
    optimized: boolean;
    
    constructor(value, optimized) {
      this.value = value;
      this.optimized = optimized || false;
    }
  
    toString() {
      return this.value;
    }
  }